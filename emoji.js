function code(s) {
	var s0 = s.charCodeAt(0);
	if (0xD800 <= s0 && s0 <= 0xDBFF) {
		var s1 = s.charCodeAt(1);
		return (((s0 & 0x03FF)<<10) | (s1 & 0x3FF)) + 0x10000;
	}
	return s0;
}

function uni(c) {
	if (c > 0xFFFF) {
		c -= 0x10000;
		var s0 = ((c >> 10) & 0x3FF) | 0xD800;
		var s1 = (c & 0x3FF) | 0xDC00;
		return String.fromCharCode(s0, s1);
	}
	return String.fromCharCode(c);
}

function list(s, e) {
	var cs = code(s);
	var ce = code(e);
	var l = [];
	for (var i = cs; i <= ce; i++) {
		l.push(uni(i));
	}
	return l;
}

function inRange(s, v, e) {
	return s <= v && v <= e;
}

function EmojiColor(e) {
	for (var k in emojiMap) {
		if (emojiMap[k].indexOf(e) >= 0)
			return k;
	}
	return "#000";
}

window.onload = function() {
	var emojiList = [];
	for (var k in emojiMap) {
		emojiList = emojiList.concat(emojiMap[k]);
	}
	var index = Math.floor(Math.random() * emojiList.length);
	var color = EmojiColor(emojiList[index]);
	var elGlyph = document.querySelector("#glyph");
	elGlyph.textContent = emojiList[index];
	elGlyph.style.color = color;
	var elCode = document.querySelector("#code");
	elCode.textContent = "U+" + code(emojiList[index]).toString(16).toUpperCase();
};

