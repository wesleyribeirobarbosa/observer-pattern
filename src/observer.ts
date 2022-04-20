import Subject from './subject';

export default interface Observer {
  subject: Subject;
  update(): void;
};
