import Observer from './observer';
import Subject from './subject';

export default class Observer2 implements Observer {
  subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  };

  update() {
   console.log('Observer2 notified. New state: ', this.subject.getState());
  };
};