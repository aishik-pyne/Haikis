---
title: "{{ replace .Name "-" " " | title }}"
from: "{{ .Date | time.Format "2006-01" }}"
to: "{{ .Date | time.Format "2006-01"}}"
type: "education"
icon:
---

