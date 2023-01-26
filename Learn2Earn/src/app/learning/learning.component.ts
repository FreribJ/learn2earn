import {Component} from '@angular/core';

interface lerntexte {
  kapitel: String,
  text: string
}

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent {

  lerntexteList: lerntexte[] = [{
    kapitel: "Kapitel 1:",
    text: "Finanzierung des eigenen Autos / Unterhalt\nEin Auto zu besitzen ist zwar bequem, aber es kann auch eine große Belastung für Ihre Finanzen sein. Der Unterhalt eines Autos kann schnell teuer werden, besonders wenn Sie nicht vorbereitet sind. Glücklicherweise gibt es einige Möglichkeiten, wie Sie den Unterhalt Ihres Autos finanzieren können, ohne dass es Ihr Budget sprengt.\nEine Möglichkeit, den Unterhalt Ihres Autos zu finanzieren, besteht darin, einen Teil des Geldes zu sparen, das Sie für den Unterhalt ausgeben müssen. Legen Sie jeden Monat einen bestimmten Betrag auf ein separates Konto für den Autounterhalt. Auf diese Weise haben Sie immer Geld zur Verfügung, wenn Sie es brauchen.\nEine andere Möglichkeit, den Unterhalt Ihres Autos zu finanzieren, ist die Nutzung einer Kreditkarte. Suchen Sie nach einer Kreditkarte, die speziell für Autounterhalt ausgelegt ist und bietet Ihnen einen niedrigen Zinssatz und eine lange Laufzeit. So können Sie kleinere Reparaturen oder Wartungen bezahlen und den Saldo in Raten zurückzahlen, anstatt alles auf einmal bezahlen zu müssen.\nEine weitere Möglichkeit, den Unterhalt Ihres Autos zu finanzieren, besteht darin, einen Autokredit aufzunehmen. Es gibt spezielle Autokredite, die es Ihnen ermöglichen, einen Teil oder sogar den gesamten Unterhalt Ihres Autos zu finanzieren. Vergleichen Sie verschiedene Angebote und suchen Sie nach dem besten Zinssatz und den besten Bedingungen."},
    {kapitel: "Kapitel 2:", text: "blaaa"}];

  selectedKapitel: lerntexte = this.lerntexteList[0];

  switchkapitel() {
    setTimeout(() => console.log(this.selectedKapitel), 1000);
  }
}
