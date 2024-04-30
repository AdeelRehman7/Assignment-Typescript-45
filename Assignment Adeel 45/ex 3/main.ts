let name1: string = "Adeel Rehman";
console.log("lowercase:", name1.toLowerCase());
console.log("uppercase:", name1.toUpperCase());
console.log("titlecase:", name1.replace(/\b\w/g,c=> c.toUpperCase()));