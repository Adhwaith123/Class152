AFRAME.registerComponent("box",{
    schema:{movex:{type:"number",default:0}},
    tick:function(){
        window.addEventListener("click",()=>{
            this.data.movex=this.data.movex+0.005
        })
        var pos=this.el.getAttribute("position")
        pos.x=pos.x+this.data.movex
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }

})

