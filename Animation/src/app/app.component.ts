import { Component } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger("divState", [
      state("normal", style({
        backgroundColor: "red",
        transform: "translateX(0px)"
      })),
      state("highlighted", style({
        backgroundColor: "blue",
        transform: "translateX(400px)"
      })),
      transition("normal <=> highlighted", animate(600)),
      // transition("highlighted => normal", animate(200))
    ]),
    trigger("wildState", [
      state("normal", style({
        backgroundColor: "red",
        transform: "translateX(0px)  scale(1)",
        width: "100px",
        borderRadius: '0px'
      })),
      state("highlighted", style({
        backgroundColor: "blue",
        transform: "translateX(200px)  scale(1)",
        width: "300px",
        borderRadius: '0px'
      })),
      state("shrunken", style({
        backgroundColor: "blue",
        transform: "translateX(600px) scale(0.5)",
        width: "100px",
      })),
      // Type1
      // transition("highlighted => normal", animate(200))
      // transition("normal => highlighted", animate(600)),
      // Type2
      // transition("normal <=> highlighted", animate(600)),
      // Complex transition
      transition("highlighted <=> normal", animate(200)),
      // transition("shrunken <=> *", animate(500, style({
      //   borderRadius: "50px" 
      // })))
      transition("shrunken <=> *",[
        style({
          backgroundColor: "orange",
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger("list1", [
      state("in", style({
        opacity: 1,
        transform: "translateX(0px)"
      })),
      transition(
        "void => *", [
          style({
            opacity: 0,
            transform: "translateX(-100px)"
          }),
          animate(200)
        ]
      ),
      transition(
        "* => void", [
          animate(200, style({
            opacity: 0,
            transform: "translateX(100px)"
          }))
        ]
      ),
    ])
  ]
})
export class AppComponent {
  state="normal";
  wildState="normal";
  list = ['Milk', 'Sugar', 'Bread'];
  
  onAnimate(){ 
    this.wildState == "normal" ? this.wildState = "highlighted" : this.wildState = "normal";
    this.state == "normal" ? this.state = "highlighted" : this.state = "normal";
  }
  onShrink(){
    this.wildState="shrunken";
  }
  onAdd(item) {
    this.list.push(item);
  }
  
  onDelete(item){
    this.list.splice(this.list.indexOf(item), 1);
  }
}
