var RandomName = function() {
    this.vowels = "aeiou";
};

RandomName.prototype = {
    _pickVowel : function() {
        return this.vowels.charAt(this.getRandomInt(0,4));
    },
    
    _pickConsonant : function() {
        var c = this._getChar();
        while(this._isVowel(c)) {
            c = this._getChar();
        }
        return c;
    },
    
    _getChar : function() {
        return String.fromCharCode(this.getRandomInt(97,122));
    },
    
    _isVowel : function(c) {
        return (this.vowels.indexOf(c) >= 0);
    },
    
    _assemble : function(pattern) {
        var assembled = "";
        for(i = 0; i < pattern.length; i++) {
            if('c' == pattern[i]) {
                assembled += this._pickConsonant();
            } else {
                assembled += this._pickVowel();
            }
        }
        return assembled;
    },
    
    _get : function() {
        var fuzzy = this.getRandomInt(5,7);
        var pattern = '';
        if(1 == this.getRandomInt(0,1)) {
            pattern = 'cvcc';
            if (fuzzy >= 5) { pattern += 'v'; }
            if (fuzzy >= 6) { pattern += 'c'; }
            if (fuzzy >= 7) { pattern += 'v'; }            
        } else {
            pattern = 'vccv';
            if (fuzzy >= 5) { pattern += 'c'; }
            if (fuzzy >= 6) { pattern += 'v'; }
            if (fuzzy >= 7) { pattern += 'c'; }
        }
        return this._assemble(pattern);
    },
    
    generate : function() {
        return this._get();
    },
        
    getRandomInt : function(min, max) {    
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};