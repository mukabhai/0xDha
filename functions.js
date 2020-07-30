$(document).ready(function() {

    setInterval ('cursorAnimation()', 1000);
    
    var text = 'whois 0xDha<br><br>Dhaiwat is the Cyber Security Researcher and a nice guy.<br><br>Since 2019 has been in cyber security field.<br><br>Dhaiwat has worked on various security projects of Indian Co-operative Banks, FinTech Companies of India, Australia & France and lot others.<br><br>He has also performed various security audits including Infrastructure / Network and Web, Configuration Review, Cloud Security, Cyber Forensics and Log Analysis.<br><br>He has managed and delivered more than 10 mediums to large-sized Information Security projects across industry verticals including Banking, E-commerce, Manufacturing, and Entertainment.<br><br>Dhaiwat actively participate in international hacking conferences and events such as Bsides, Nullcon and many others.<br><br>He has trained 100+ students across the state about ethical hacking and cyber security. He also holds  six sigma yellow belt from MSME.<br><br><b>Contact</b>: &nbsp; &nbsp; <a href="https://www.twitter.com/0xDha/" target="_blank">Twitter</a> &nbsp; <a href="https://www.linkedin.com/in/dhaiwat/" target="_blank">LinkedIn</a><br><br># ';    
    type(text);
});

function type(text, new_caption_length) {
    captionLength = new_caption_length || 0;

    $('#caption').html(text.substr(0, captionLength++));
    if(captionLength < text.length+1) {
        setTimeout(function(){
            type(text, captionLength);
        }, 1);
    }
}

function erase() {
    caption = $('#caption').html();
    captionLength = caption.length;
    if(captionLength > 0){
        $('#caption').html(caption.substr(0, captionLength-1));
        setTimeout(function(){
            erase();
        }, 1);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

function pi() {
    erase();
    var text='.MMMMM7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7MMMMM<br>&nbsp;&nbsp;ZMMMM7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888888888888888888888&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.8888888888888888888888&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.88888888888888888888&nbsp;.&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMM&nbsp;.88888888:&nbsp;&nbsp;..&nbsp;&nbsp;..&nbsp;..&nbsp;.&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMMMMMMMMMMMMMM:.&nbsp;&nbsp;&nbsp;.MMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;MMMMM.&nbsp;.888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMMMMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;.MMMMMMM?&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;?MMMMM&nbsp;&nbsp;&nbsp;888888888.&nbsp;.&nbsp;..888:.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMMMM=MMMMMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;MMMM&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;.888888888888888888888:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;$MMMM&nbsp;NMMMM&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMM&nbsp;&nbsp;&nbsp;.88888888888888888888888.&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;MMMM.&nbsp;&nbsp;MMMM~&nbsp;&nbsp;&nbsp;MMO&nbsp;MIMMMMI.8888888888.~=88888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;MMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;MMM&nbsp;&nbsp;&nbsp;&nbsp;MMMM.88888888.&nbsp;&nbsp;&nbsp;&nbsp;$888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;MMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;MMM&nbsp;&nbsp;&nbsp;&nbsp;MMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;MMMM&nbsp;MMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;.&nbsp;&nbsp;&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;MMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;78888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~MMMMM&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMM,MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;MMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;78DZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88888888..&nbsp;&nbsp;&nbsp;&nbsp;88888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.8888888888&nbsp;&nbsp;&nbsp;.8888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.888888888&nbsp;&nbsp;&nbsp;&nbsp;8888888888,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;.888888888.&nbsp;&nbsp;&nbsp;78888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~8888888888&nbsp;&nbsp;8888888888~.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888888888888888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888888888888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;7Ru57&nbsp;y0uR&nbsp;73(Hn01u57&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;eef5204d6a88&nbsp;.<br>&nbsp;&nbsp;';
    type(text);
}

function cow() {
    erase();
    var text='<br/>&nbsp;,__,<br/>&nbsp;(oo)____<br/>&nbsp;(__)&nbsp;&nbsp;&nbsp;&nbsp;)\\<br/>&nbsp;&nbsp;&nbsp;&nbsp;||--|| *<br/>Seb wins the cow game';
    type(text);
}
