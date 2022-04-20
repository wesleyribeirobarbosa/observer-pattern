import Observer1 from './observer1';
import Observer2 from './observer2';
import Observer3 from './observer3';
import Subject from './subject';

const subject = Subject.getInstance();

new Observer1(subject);
new Observer2(subject);
new Observer3(subject);

// Updating only the Subject, all the observers will be notified (1:n relation)
setInterval(function() {
  subject.setState(Math.floor(Math.random() * 10));
  console.log('\n');
}, 2000);
