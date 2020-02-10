import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; // 追加
import { Observable } from 'rxjs'; // 追加

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-on-fire-chat';

  messages: Observable<any[]>;
  // inputMessage = 'リアルタイムデータバインド';
  // inputName = 'Unknown';
  inputMessage;
  inputName;
  constructor(
    private db: AngularFirestore // DI
  ) {
    // idFieldを追加すると、そのドキュメントのインデックスが、指定した名前のプロパティに追加される
    this.messages = db.collection('messages', ref => ref.orderBy('createdAt', 'desc')).valueChanges({ idField: 'id' }); // DBと接続

    // console.log(this.messages);
  }

  // 送信処理
  sendMessage() {
    // console.log('動いてるよ!');
    this.db.collection('messages').add({

        name: this.inputName,
        body: this.inputMessage,
        createdAt: new Date() // ここを追加
    });
  }

  // 削除処理
  // 削除ボタンが押されたメッセージを削除する
  deleteMessage(message) {
    this.db.collection('messages').doc(message.id).delete();
  }
}
