import Observer from './observer';

export default class Subject {
 private static instance: Subject;
 private state: number;
 private observerList: Array<Observer> = [];

 /**
  * The Singleton's constructor should always be private to prevent direct
  * construction calls with the `new` operator.
  */
 private constructor() { }

 private notifyAll() {
   this.observerList.forEach((observer) => {
     observer.update();
   })
 };

 public setState(state: number): void {
   this.state = state;
   this.notifyAll();
 };

 public getState(): number {
  return this.state;
 }

 public registerObserver(observer: Observer): void {
   this.observerList.push(observer);
 }

 public static getInstance = (): Subject => !this.instance ? new this() : this.instance;

};