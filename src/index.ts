import Observer1 from './observer1';
import Observer2 from './observer2';
import Observer3 from './observer3';
import Subject from './subject';

const subject = Subject.getInstance();

new Observer1(subject);
new Observer2(subject);
new Observer3(subject);

setInterval(function() {
  subject.setState(Math.floor(Math.random() * 10));
  console.log('\n');
}, 2000);
