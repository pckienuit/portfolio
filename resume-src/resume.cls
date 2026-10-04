%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Resume Class File
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\ProvidesClass{resume}[2026/08/04 v1.3 Resume class]
\LoadClass[12pt,a4paper]{article}

\usepackage[parfill]{parskip}
\usepackage{array}
\usepackage{ifthen}
\usepackage{fontspec}
\setmainfont{Times New Roman}
\usepackage{microtype}
\usepackage{xcolor}
\usepackage{hyperref}

\definecolor{headerblue}{RGB}{26,54,93}
\definecolor{accentblue}{RGB}{37,99,235}
\definecolor{rulegray}{RGB}{160,160,165}
\hypersetup{colorlinks=true,urlcolor=accentblue,linkcolor=accentblue}
\pagestyle{empty}

\def \name#1{\def\@name{#1}}
\def \@name {}
\def \addressSep {\ \textbullet\ }
\let \@addressone \relax
\let \@addresstwo \relax
\let \@addressthree \relax
\def \address #1{\@ifundefined{@addresstwo}{\def \@addresstwo {#1}}{\@ifundefined{@addressthree}{\def \@addressthree {#1}}{\def \@addressone {#1}}}}
\def \printaddress #1{\begingroup\def \\ {\addressSep}\small\color{black!70}\centering #1\par\endgroup\addressskip}
\def \printname {\begingroup\namesize\bfseries\color{headerblue}\centering\@name\par\nameskip\endgroup}

\let\ori@document=\document
\renewcommand{\document}{\ori@document\printname\@ifundefined{@addressone}{}{\printaddress{\@addressone}}\@ifundefined{@addresstwo}{}{\printaddress{\@addresstwo}}\@ifundefined{@addressthree}{}{\printaddress{\@addressthree}}\vspace{2pt}{\color{accentblue}\hrule height 1.2pt}\vspace{4pt}}

\newenvironment{rSection}[1]{\sectionskip{\color{headerblue}\textbf{\MakeUppercase{#1}}}\sectionlineskip{\color{rulegray}\hrule height 0.6pt}\vspace{2pt}\begin{list}{}{\setlength{\leftmargin}{0em}}\item[]}{\end{list}}
\newenvironment{rSubsection}[4]{{\bf #1} \hfill {#2}\ifthenelse{\equal{#3}{}}{}{\\{\em #3} \hfill {\em #4}}\smallskip\begin{list}{$\cdot$}{\leftmargin=0em}\itemsep -0.5em \vspace{-0.5em}}{\end{list}\vspace{0.5em}}

\def\namesize{\Large}
\def\addressskip{\smallskip}
\def\sectionlineskip{\smallskip}
\def\nameskip{\smallskip}
\def\sectionskip{\medskip}
