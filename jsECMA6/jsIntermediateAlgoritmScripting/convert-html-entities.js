function convertHTML(str) {
  return str.replace(/&/ig,"&amp;")
            .replace(/</ig,"&lt;")
            .replace(/>/ig,"&gt;")
            .replace(/"/ig,"&quot;")
            .replace(/'/ig,"&apos;");
}

const getval = convertHTML("Dolce & Gabbana");
console.log(getval)