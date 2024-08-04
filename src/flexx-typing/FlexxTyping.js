class FlexxTyping {
    constructor(element,elemSetting) {
        const domElement = document.querySelector(element);
        this.domElement = domElement;

        const setting = {loop:false,cursor:true,...elemSetting};
        this.setting = setting;
        this.autoType();
    }

    autoType() {
        let index = 0;
        let switchText = 0;
        let textBox = "";
        let adding = true; // Flag to indicate if we are adding or removing text

        // default cursor
        const domElemObj = window.getComputedStyle(this.domElement,null);
        const getElemFontSize =domElemObj.getPropertyValue('font-size');
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.style.width = this.setting.cursorWidth?this.setting.cursorWidth:'2px';
        cursor.style.height = this.setting.cursorHeight? this.setting.cursorHeight:getElemFontSize;
        cursor.style.backgroundColor = this.setting.cursorColor?this.setting.cursorColor:'gray';
        cursor.style.display = 'inline-block';
        cursor.style.position = 'relative';
        cursor.style.marginLeft = '2px'

        let interval = setInterval(() => {
            let text = this.setting.textList[switchText];
            if (adding) {
                if (index < text.length) {
                    textBox += text.charAt(index);
                    index++;
                } else {
                    adding = false;
                    index--; // Prepare for removing text
                }
            } else {
                if (index >= 0) {
                    textBox = textBox.slice(0, -1);
                    index--;
                } else {
                    adding = true; // Prepare for adding text again
                    index = 0; // Reset index for the new text
                    if(!this.setting.loop)return;                        
                    switchText = (switchText + 1) % this.setting.textList.length; // Cycle through paragraphs
                }
            }

            // set text
            this.domElement.textContent = textBox;
            // set default cursor
            if(!this.setting.cursor){
                return;
            }
            this.domElement.appendChild(cursor); // Ensure cursor is always at the end
        }, this.setting.speed);
    }
}
