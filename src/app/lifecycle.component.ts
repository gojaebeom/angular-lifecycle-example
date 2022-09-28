import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `<div>hello lifecycle</div>
  <button>click!</button>
  `,
  standalone: true,
})
export class LifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('div') div: HTMLDivElement;
  @Input() inputData;

  ngOnChanges() {
    console.log('%c ngOnChanges', 'color:red');
    console.log('컴포넌트가 인스턴트화 될 때 가장 먼저 실행');
    console.log(
      '그 이후에 바인딩된 프로퍼티(@input)의 값이 새로 바뀔 때 마다 재호출'
    );
  }

  ngOnInit() {
    console.log('%c ngOnInit', 'color:red');
    console.log('컴포넌트가 초기화되면 실행');
  }

  ngDoCheck() {
    console.log('%c ngDoCheck', 'color:red');
    console.log('변경이 감지될 때마다 호출');
  }

  ngAfterContentInit() {
    console.log('%c ngAfterContentInit', 'color:red');
    console.log('ng-content를 통해 투영된 컨텐츠가 초기화 될 때마다 실행');
  }

  ngAfterContentChecked() {
    console.log('%c ngAfterContentChecked', 'color:red');
    console.log('컨텐츠가 검사될 때마다 실행');
  }

  ngAfterViewInit() {
    console.log('%c ngAfterViewInit', 'color:red');
    console.log('뷰가 랜더링을 완료하면 호출');
  }

  ngAfterViewChecked() {
    console.log('%c ngAfterViewChecked', 'color:red');
    console.log('뷰가 검사 될 때마다 실행');
  }

  ngOnDestroy() {
    console.log('%c ngOnDestroy', 'color:red');
    console.log('컴포넌트가 삭제될 때 실행');
  }
}
