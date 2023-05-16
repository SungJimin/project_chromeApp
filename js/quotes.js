const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

  const quote = document.querySelector('#quote span.quote');
  const author = document.querySelector('#quote span.author');
  // 소수점 > 정수 변환 방법
  // round : 반올림/반내림 1.5 => 2 / 1.3 => 1
  // ceil : 올림 1.01 => 2
  // floor : 내림 1.9 => 1
  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todayQuote.quote;
  author.innerText = " - " + todayQuote.author;