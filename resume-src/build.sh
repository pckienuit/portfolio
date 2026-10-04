#!/usr/bin/env bash
# Build the company-neutral resumes used by the portfolio into ../assets/resumes.
# Needs xelatex + latexmk and the Times New Roman font (resume.cls uses fontspec).
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p ../assets/resumes
for f in Phan-Chi-Kien-*-Resume.tex; do
  latexmk -xelatex -interaction=nonstopmode -halt-on-error -quiet "$f" >/dev/null
  mv "${f%.tex}.pdf" ../assets/resumes/
done
latexmk -c >/dev/null
echo "Built: $(ls ../assets/resumes)"
