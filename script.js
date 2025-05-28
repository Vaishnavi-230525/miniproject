setInterval(()=>{

    d=new Date()
    htime=d.gethours()
    mtime=d.getminutes()
    stime=d.getseconds()
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hours.style.transform=`rotate($hrotation)deg`;
    minutes.style.transform=`rotate($mrotation)deg`;
    seconds.style.transform=`rotate($srotation)deg`;
}, 1000);