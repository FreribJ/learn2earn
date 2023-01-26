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
    kapitel: "1: Finanzierung des Unterhalts deines Autos ",
    text: "Ein Auto zu besitzen ist zwar bequem, aber es kann auch eine große Belastung für Ihre Finanzen sein. Der Unterhalt eines Autos kann schnell teuer werden, besonders wenn Sie nicht vorbereitet sind. Glücklicherweise gibt es einige Möglichkeiten, wie Sie den Unterhalt Ihres Autos finanzieren können, ohne dass es Ihr Budget sprengt.\nEine Möglichkeit, den Unterhalt Ihres Autos zu finanzieren, besteht darin, einen Teil des Geldes zu sparen, das Sie für den Unterhalt ausgeben müssen. Legen Sie jeden Monat einen bestimmten Betrag auf ein separates Konto für den Autounterhalt. Auf diese Weise haben Sie immer Geld zur Verfügung, wenn Sie es brauchen.\nEine andere Möglichkeit, den Unterhalt Ihres Autos zu finanzieren, ist die Nutzung einer Kreditkarte. Suchen Sie nach einer Kreditkarte, die speziell für Autounterhalt ausgelegt ist und bietet Ihnen einen niedrigen Zinssatz und eine lange Laufzeit. So können Sie kleinere Reparaturen oder Wartungen bezahlen und den Saldo in Raten zurückzahlen, anstatt alles auf einmal bezahlen zu müssen.\nEine weitere Möglichkeit, den Unterhalt Ihres Autos zu finanzieren, besteht darin, einen Autokredit aufzunehmen. Es gibt spezielle Autokredite, die es Ihnen ermöglichen, einen Teil oder sogar den gesamten Unterhalt Ihres Autos zu finanzieren. Vergleichen Sie verschiedene Angebote und suchen Sie nach dem besten Zinssatz und den besten Bedingungen."},
    {kapitel: "2: Sparen der Inflation", text: "Sparen während der Inflation kann eine Herausforderung sein, da die Kaufkraft Ihres Ersparten im Laufe der Zeit abnehmen kann. Es gibt jedoch mehrere Strategien, mit denen Sie während Zeiten der Inflation erfolgreich sparen können.Eine Strategie ist, Ihr Erspartes in Vermögenswerte zu investieren, die während Inflationsperioden tendenziell an Wert gewinnen. Beispiele hierfür sind Aktien, Immobilien und Rohstoffe wie Gold und Silber, die während Inflationsperioden gut abschneiden können. Indem Sie in diese Arten von Vermögenswerten investieren, können Sie die Kaufkraft Ihres Ersparten erhalten und sogar sehen, wie sie wachsen.Eine weitere Strategie ist die Verwendung von inflationsgeschützten Sparformen. Diese Arten von Konten, wie z.B. Treasury Inflation-Protected Securities (TIPS) und I Bonds, sind darauf ausgelegt, Ihr Erspartes vor Inflation zu schützen. Sie zahlen in der Regel einen niedrigeren Zins als herkömmliche Sparformen, aber die Tilgungs- und Zinszahlungen werden an die Inflation angepasst, was dazu beitragen kann, die Kaufkraft Ihres Erspartes zu erhalten.Es ist auch wichtig, auf Ihre Ausgabegewohnheiten zu achten. Während der Inflation tendieren die Preise von Gütern und Dienstleistungen dazu zu steigen, daher ist es wichtig, Ihre Ausgaben im Auge zu behalten und unnötige Ausgaben zu vermeiden. Eine Möglichkeit hierfür ist, ein Haushaltsbuch zu erstellen und sich daran zu halten, welches Ihnen hilft, Ihre Ausgaben im Auge zu behalten und Bereiche zu identifizieren, in denen Sie sparen können.Zuletzt sollten Sie versuchen Ihr Einkommen zu erhöhen. Wenn Sie mehr verdienen, können Sie mehr sparen und Ihre Sparrate erhöhen. Selbst wenn Ihr Einkommen nicht so schnell wie die Inflation steigt, können Sie durch eine Erhöhung Ihres Einkommens die Inflation aufholen."}];

  selectedKapitel: lerntexte = this.lerntexteList[0];

  switchkapitel() {
    setTimeout(() => console.log(this.selectedKapitel), 1000);
  }
}
