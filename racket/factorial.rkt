#lang racket
(define fact
  (lambda (n)
    (if (= n 0)
        1
        (* (fact(- n 1)) n)
    )
  )
)

(fact 2) ; 2
(fact 5) ; 120
(fact 3) ; 6