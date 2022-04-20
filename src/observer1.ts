import Observer from './observer';
import Subject from './subject';

export default class Observer1 implements Observer {
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  };

  update() {
   console.log('Observer1 notified. New state: ', this.subject.getState());
  };
};
