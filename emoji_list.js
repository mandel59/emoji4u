function DroidEmojiList() {
	var l = list("😁", "😆");
	l = l.concat(list("😉", "😍"));
	l.push("😏");
	l = l.concat(list("😒", "😔"));
	l.push("😖", "😘", "😚");
	l = l.concat(list("😜", "😞"));
	l = l.concat(list("😠", "😥"));
	l = l.concat(list("😨", "😫"));
	l.push("😭");
	l = l.concat(list("😰", "😳"));
	l.push("😵", "😷");
	l = l.concat(list("🙅", "🙇"));
	l = l.concat(list("🙋", "🙏"));
	return l;
}
var droidList = DroidEmojiList();
var monkeyList = ["🙈", "🙉", "🙊", "🐒", "🐵"];
var catList = list("😸", "🙀").concat("🐱");

var emojiMap = {
	"#A4C639": /* Droid green */ droidList,
	"#FFB74C": /* orange */ catList,
	"brown": monkeyList.concat("🐻"),
	"black": ["🐜", "🐧", "🐾"],
};
