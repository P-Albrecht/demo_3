import { Component } from '@angular/core';
import { NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-enviroment',
  templateUrl: './enviroment.component.html',
  styleUrls: ['./enviroment.component.scss']
})
export class EnviromentComponent {

  component = ''

  constructor(private router: Router) {
    this.component = router.url.split('/')[1]
    router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        console.log(event.url)
      }
    });
  }

  onClickMe() {
    console.log('...........')
  }

  treeInputValue = [{name:'aaa', children:[]},{name:'bbb', children:[{name:'xxx', children:[]}, {name:'zzzz', children:[]}]},{name:'uuu', children:[]}];

  nodeSelectEventOutputEvent(response: any) {
    console.log(response)
  }
}
