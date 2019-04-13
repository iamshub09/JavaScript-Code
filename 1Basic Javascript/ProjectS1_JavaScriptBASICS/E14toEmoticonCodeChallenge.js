function toEmoticon(bro){
    switch(bro)
           {
           case 'shrug':
           return '|_{"}_|';
           break;
               
           case 'smiley face':
           return ':)';
           break;
               
           case 'frowny face':
           return ':(';
           break;
               
               
           case 'winky face':
           return ';)';
           break;
               
           case 'heart':
           return '<3';
           break;
               
           default:
           return '|_(* ~ *)_|';
               
           }
  }
  
  const obb=toEmoticon('heart');
  console.log(obb);