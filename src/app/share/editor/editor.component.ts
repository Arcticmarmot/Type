import {ChangeDetectionStrategy, Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {Sentence, Word} from "../../services/data-types/article";
import {fromEvent, Subscription} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {debounceTime, map, tap} from "rxjs/operators";


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit,OnDestroy {
  @Input() content;
  page = 0;
  startTime;
  sentences: Array<Sentence>;
  words: Array<Array<Word>>;
  input: Array<string> = new Array<string>();
  cp = [0,0]; //cursor position
  private isTimeToEnter = false;
  isSubmitKeyDown = false;
  private eventObservable: Subscription;
  private skipNum: number;
  private lineNum = 100;
  constructor(@Inject(DOCUMENT) private doc) { }

  ngOnInit() {
    this.sentences = this.content.sentences;
    this.words = this.content.words;
    console.log(this.content)
    this.eventObservable = this.createEventObservable().subscribe(
      (k: {key:string,ctrlKey:boolean}) => {
        this.keyDownHandle(k.key);
        if(k.ctrlKey && (k.key === 's'||k.key === 'S')){
          this.isSubmitKeyDown = true;
        }
      }
    );
  }

  private createEventObservable(){
    const ob = fromEvent(this.doc, 'keydown').pipe(
      tap((e: Event) => {
        e.stopPropagation();
        e.preventDefault();
      }),
      map((e: KeyboardEvent)=>{
        return {key:e.key,ctrlKey:e.ctrlKey}
      }),
      debounceTime(16)
    );
    return ob;
  }

  private keyDownHandle(k:string){
    const k_ = this.transformKeyAndAction(k);
    if(k_ && ! this.isTimeToEnter){
      this.startTime = this.startTime || new Date().getTime();
      this.input.push(k_);
      this.refresh();
    }
  }
  private transformKeyAndAction(k: string): string {
    if (k.length > 1) {
      switch (k) {
        case 'Enter':
          this.enter();
          break;
        case 'Backspace':
          this.backspace();
          break;
        case 'Tab':
          this.tab();
          break;
      }
      k = '';
    }
    return k;
  }
  private refresh(){
    this.updateCursorPositionInLine(1);
    this.updateDom();
  }
  updateCursorPositionInLine(n: 1|-1){
    this.skipNum = n>0?this.cursorSkipUnknown(n) || 1:this.cursorSkipUnknown(n)||-1;
    this.isTimeToEnter = this.cp[1] === this.words[this.cp[0]].length;
  }
  private backspace(){
    this.input.pop();
    this.updateCursorPositionInLine(-1);
    this.updateDom();
  }
  private enter(){
    if(this.isTimeToEnter){
      if(this.cp[0] === this.sentences.length-1){
        this.isSubmitKeyDown = true;
      }else{
        if(this.cp[0] === (this.page+1)*this.lineNum-1){
          this.page += 1;
        }
        this.nextLine();
      }
    }
  }

  private tab() {
    for(const i in [1,2,3,4]){
      if(! this.isTimeToEnter){
        this.startTime = this.startTime || new Date().getTime();
        this.input.push(' ');
        this.refresh();
      }
    }
  }
  private nextLine(){
    this.input.length = 0;
    this.isTimeToEnter = false;
    this.updateSentence();
  }
  private updateSentence(){
    this.sentences[this.cp[0]].state = 'typed';
    this.cp[0] += 1;
    this.sentences[this.cp[0]].state = 'typing';
    this.cp[1] = 0;
    this.updateDom();
  }
  private updateDom() {
    const sentence = this.words[this.cp[0]];
    for(const w in sentence){
      const index = Number(w);
      if(index === this.cp[1]-this.skipNum){
        if(sentence[w].state !== 'unknown') sentence[w].state = sentence[w].value===this.input[this.input.length-1]? 'typed-right':'typed-error';
      }else if(index === this.cp[1]){
        if(sentence[w].state !== 'unknown') sentence[w].state = 'typing';
        let elementRef = this.doc.getElementsByClassName('word-typing')[0];
        if(!elementRef) {
          if(this.cp[1] === 0){
            elementRef = this.doc.getElementsByClassName('word-untyped')[0];
            if(elementRef)
              elementRef.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
          }
        }else{
          elementRef.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
        }
      }
      if(index > this.cp[1]){
        if(sentence[w].state !== 'unknown') sentence[w].state = 'untyped';
      }
    }
  }
  private cursorSkipUnknown(n: -1|1){
    let skipNum = 0;
    do {
      if((n === 1&& this.cp[1] < this.words[this.cp[0]].length) || (n === -1 && this.cp[1] > 0)){
        this.cp[1] += n;
        skipNum += n;
      }
    } while(this.words[this.cp[0]][this.cp[1]]&&this.words[this.cp[0]][this.cp[1]].state === 'unknown');
    return skipNum;
  }
  ngOnDestroy(): void {
    this.eventObservable.unsubscribe();
  }


}
