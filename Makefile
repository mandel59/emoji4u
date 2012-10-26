all: AndroidEmoji_1.ttf AndroidEmoji_1.woff

AndroidEmoji_1.ttf: AndroidEmoji.ttf
	./modify.py $< $@

AndroidEmoji_1.woff: AndroidEmoji_1.ttf
	./woff.py $< $@
