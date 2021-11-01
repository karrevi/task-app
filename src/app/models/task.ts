export class TaskAll {
  title: string;
  description: string;
  _id?: number;

  constructor(title: string, description: string, _id: number) {
    (this.title = title), (this.description = description), (this._id = _id);
  }
}
