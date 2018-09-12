import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    // To add animation in an element
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0) rotate(0deg)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(300px) rotate(180deg)'
      })),
      // To achieve animation then hard shift of css
      transition("normal <=> highlighted", animate(1000))
    ]),

    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        borderRadius: "0px",
        transform: 'translateX(0) rotate(0deg) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        borderRadius: "0px",
        transform: 'translateX(300px) rotate(180deg) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        borderRadius: "5px",
        transform: 'translateX(0px) rotate(180deg) scale(0.5)'
      })),
      // To achieve animation then hard shift of css
      transition("normal => highlighted", animate(1000)),
      transition("highlighted => normal", animate(1000)),
      transition("shrunken <=> *", 
      [
        // style({
        //   backgroundColor: 'orange'
        // }),
        animate(1500, style({
          backgroundColor: 'orange',
          borderRadius: "150px"
        })),
        // animate(500, style({
        // })),
        animate(500)
      ])
    ]),
// For the list
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      // This animation is from nothing to in state
      transition('void => *', [
        // Starting state animation
        style({
          opacity: 1,
          transform: 'translateX(-100px)'
        }),
        // animation done in 300 sec from void state to *
        animate(300)
      ]),
      transition('* => void', [
        // animation done in 300 sec from * to void state
        // Ending state animation
        animate(300, style({
            opacity: 0,
            transform: 'translateX(100px)'
        }))
      ])
    ]),
// For the list2
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        // Adding keyframes
        animate(500, keyframes([
          style({
            transform: 'translateX(-100px)', 
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(10px)', 
            opacity: 1,
            offset: 0.7
          }),
          style({
            transform: 'translateX(-10px)', 
            opacity: 1,
            offset: 0.85
          }),
          style({
            transform: 'translateX(0px)', 
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(200, style({
            color: 'red'
          })),
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  // That state will help to achieve animation and its name can be anything to trigger the animation 
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate(){
    this.state == "normal" ? this.state = "highlighted": this.state = "normal";
    this.wildState == "normal" ? this.wildState = "highlighted": this.wildState = "normal";
  };

  onAdd(item) {
    this.list.push(item);
  }

  onShrink(){
    this.wildState = 'shrunken';
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted(event){
    console.log(event);
  }
  
  animationEnded(event){
    console.log(event);
  }
}
