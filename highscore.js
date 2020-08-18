var table = document.getElementById("table")
console.log(table)
var scores = [{"initials":"RLB","score":54},{"initials":"RLB","score":49},{"initials":"RLB","score":49},{"initials":"RLB","score":49},{"initials":"RLB","score":55},{"initials":"RLB","score":54},{"initials":"RLB","score":22},{"initials":"RLB","score":53},{"initials":"RLB","score":53},{"initials":"RLB","score":54},{"initials":"RLB","score":53},{"initials":"RLB","score":14},{"initials":"rlb","score":50},{"initials":"RLB","score":55},{"initials":"rlb","score":51}]
scores = scores.sort(function(a, b) {
        return b.score - a.score;
      });
for(var i = 0; i<scores.length; i++){
  var tr = document.createElement("tr")
  var intials =document.createElement("td")
  intials.textContent = scores[i].initials
  tr.appendChild(intials)
   var scorez =document.createElement("td")
  scorez.textContent = scores[i].score
  tr.appendChild(scorez)
  table.appendChild(tr)
}

