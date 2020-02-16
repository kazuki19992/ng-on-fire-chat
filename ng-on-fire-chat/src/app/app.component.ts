import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; // 追加
import { Observable } from 'rxjs'; // 追加
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng-on-fire-chat';

    messages: Observable<any[]>;

    inputMessage: string;
    inputName: string;
    logedIn = false;

    // 変数名: 型名;
    email: string;
    password: string;

    constructor(
        private db: AngularFirestore, // DI
        private afAuth: AngularFireAuth // 使えるようによろしくやってくれる
    ) {
        // idFieldを追加すると、そのドキュメントのインデックスが、指定した名前のプロパティに追加される
        this.messages = db.collection('messages', ref => ref.orderBy('createdAt', 'desc')).valueChanges({ idField: 'id' }); // DBと接続

        // console.log(this.messages);
    }

    // 送信処理
    sendMessage() {
        // console.log('動いてるよ!');

        // ユーザー名が空欄ならば'Unknown'に置換え
        this.db.collection('messages').add({
                // name: this.inputName,
                name: 'カズ之助',
                body: this.inputMessage,
                createdAt: new Date() // ここを追加
        });
    }


    // 削除処理
    // 削除ボタンが押されたメッセージを削除する
    deleteMessage(message) {
        this.db.collection('messages').doc(message.id).delete();
    }

    login() {
        // 成功ならthen, 失敗ならcatch
        // try{}chatch{}みたいなもの？？
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(res => {
            alert('ログイン成功しました。');
            this.logedIn = true;
        }).catch(res => {
            alert('ログインできません。');
        });
    }
}
