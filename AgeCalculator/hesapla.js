const yasHesapla = () => {
    let d1 = parseInt(document.getElementById("date").value);
    let m1 = parseInt(document.getElementById("month").value);
    let y1 = parseInt(document.getElementById("year").value);

    
    if (isNaN(d1) || isNaN(m1) || isNaN(y1) || d1 < 1 || d1 > 31 || m1 < 1 || m1 > 12) {
        document.getElementById("goster").innerText = "Lütfen geçerli bir tarih girin.";
        return;
    }

    let today = new Date();
    let d2 = today.getDate();
    let m2 = 1 + today.getMonth(); // JavaScript aylar 0'dan başlar
    let y2 = today.getFullYear();

    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Şubat ayının artık yıl kontrolü
    const isLeap = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    if (isLeap(y1)) {
        monthDays[1] = 29;
    }

    if (d1 > d2) {
        d2 = d2 + monthDays[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById("goster").innerText =
        "Senin yaşın : " + y + " yıl, " + m + " ay ve " + d + " gün.";
};