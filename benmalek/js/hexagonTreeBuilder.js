class Node {

    constructor(name,r,c, renderer = null){
        this.name=name;
        this.r=r;
        this.c=c;
        this.renderer = renderer;
    }

    getNeighbors(nodes){

        let additional=(this.r%2===0)?-1:1;

        let coords=[
            [this.r,this.c+1],
            [this.r,this.c-1],
            [this.r-1,this.c],
            [this.r+1,this.c],
            [this.r-1,this.c+additional],
            [this.r+1,this.c+additional]
        ];

        return coords
            .map(([r,c])=>nodes.find(n=>n.r===r && n.c===c))
            .filter(x=>x);
    }

    getPosition(size, gap = 5) {

        const w = Math.sqrt(3) * size;

        // Distance between hexagon centers
        const horizontal = w + gap;
        const vertical = 1.5 * size + gap;

        const x = this.c * horizontal + (this.r % 2) * (horizontal / 2);
        const y = this.r * vertical;

        return [x, y];
    }

}


class HexagonMap{

    constructor(name,size,nodes,gap=5){
        this.name=name;
        this.size=size;
        this.nodes=nodes;
        this.gap=gap;
    }

    buildMap(svg){

        svg.innerHTML="";

        const size=this.size;
        const gap= this.gap;

        let group=document.createElementNS("http://www.w3.org/2000/svg","g");
        svg.appendChild(group);

        for (const node of this.nodes) {

            const [x, y] = node.getPosition(size, gap);

            const container = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
            );

            container.setAttribute(
                "transform",
                `translate(${x},${y})`
            );

            if (node.renderer) {

                node.renderer(container, size, node);

            } else {

                // default renderer

                const hex = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "polygon"
                );

                let pts = [];

                for(let i=0;i<6;i++){

                    const angle=Math.PI/180*(60*i-30);

                    pts.push(
                        `${size*Math.cos(angle)},${size*Math.sin(angle)}`
                    );
                }

                hex.setAttribute("points", pts.join(" "));
                hex.setAttribute("fill","white");
                hex.setAttribute("stroke","black");
                hex.setAttribute("stroke-width","2");

                container.appendChild(hex);

                const text=document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "text"
                );

                text.textContent=node.name;
                text.setAttribute("text-anchor","middle");
                text.setAttribute("dominant-baseline","middle");

                container.appendChild(text);

            }

            group.appendChild(container);
        }
        //-------------------
        // Fit map
        //-------------------

        let box=group.getBBox();

        svg.setAttribute(
            "viewBox",
            `${box.x-40} ${box.y-40} ${box.width+80} ${box.height+80}`
        );

        //-------------------
        // Pan
        //-------------------

        let view=svg.viewBox.baseVal;

        let dragging=false;

        let last={x:0,y:0};

        svg.onmousedown=e=>{
            dragging=true;
            last.x=e.clientX;
            last.y=e.clientY;
        };

        window.onmouseup=()=>{
            dragging=false;
        };

        window.onmousemove=e=>{

            if(!dragging)return;

            let dx=(e.clientX-last.x)*(view.width/svg.clientWidth);
            let dy=(e.clientY-last.y)*(view.height/svg.clientHeight);

            view.x-=dx;
            view.y-=dy;

            last.x=e.clientX;
            last.y=e.clientY;
        };

        //-------------------
        // Zoom
        //-------------------

        svg.onwheel=e=>{

            e.preventDefault();

            const zoom=e.deltaY>0?1.1:0.9;

            const mx=e.offsetX/svg.clientWidth;
            const my=e.offsetY/svg.clientHeight;

            const wx=view.x+mx*view.width;
            const wy=view.y+my*view.height;

            view.width*=zoom;
            view.height*=zoom;

            view.x=wx-mx*view.width;
            view.y=wy-my*view.height;

        };

    }

}