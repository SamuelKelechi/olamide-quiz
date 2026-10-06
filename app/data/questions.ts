export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "What is a web browser used for?",
    options: [
      "Creating spreadsheets",
      "Accessing websites",
      "Printing documents only",
      "Deleting computer files",
    ],
    answer: "Accessing websites",
  },

  {
    id: 2,
    question: "Which of the following is an example of a web browser?",
    options: [
      "Microsoft Excel",
      "Microsoft Word",
      "Windows Calculator",
      "Google Chrome",
    ],
    answer: "Google Chrome",
  },

  {
    id: 3,
    question: "What does a search engine help you do?",
    options: [
      "Find information online",
      "Shut down the computer",
      "Create a folder",
      "Format a document",
    ],
    answer: "Find information online",
  },

  {
    id: 4,
    question: "Which of the following should you never share with strangers online?",
    options: [
      "The name of a website",
      "A general topic you are researching",
      "Your password or PIN",
      "A public news article",
    ],
    answer: "Your password or PIN",
  },

  {
    id: 5,
    question: "Which of the following is a good internet safety practice?",
    options: [
      "Use strong, unique passwords",
      "Open every unknown link",
      "Share your PIN with friends",
      "Ignore software updates",
    ],
    answer: "Use strong, unique passwords",
  },

  {
    id: 6,
    question: "What should you do when you receive an unknown link or attachment?",
    options: [
      "Open it immediately",
      "Be careful before opening it",
      "Send it to everyone",
      "Enter your password first",
    ],
    answer: "Be careful before opening it",
  },

  {
    id: 7,
    question: "Why should you keep computer software updated?",
    options: [
      "To delete your documents",
      "To make the screen smaller",
      "To help keep the software current and safer",
      "To remove the keyboard",
    ],
    answer: "To help keep the software current and safer",
  },

  {
    id: 8,
    question: "What should you do after using an important account on a shared computer?",
    options: [
      "Log out of the account",
      "Leave the account open",
      "Give your password to the next person",
      "Save your password on the computer",
    ],
    answer: "Log out of the account",
  },

  {
    id: 9,
    question: "Microsoft Word is mainly used to create and edit what?",
    options: [
      "Internet connections",
      "Computer hardware",
      "Computer passwords",
      "Documents",
    ],
    answer: "Documents",
  },

  {
    id: 10,
    question: "When creating a new document in Microsoft Word, which option can you choose to start with a blank document?",
    options: [
      "Recycle Bin",
      "Blank document",
      "Task Manager",
      "Control Panel",
    ],
    answer: "Blank document",
  },

  {
    id: 11,
    question: "What is the insertion point or cursor in Microsoft Word?",
    options: [
      "A button used to shut down the computer",
      "A tool used to connect to the internet",
      "The position where typed text will appear",
      "A folder containing documents",
    ],
    answer: "The position where typed text will appear",
  },

  {
    id: 12,
    question: "Which keyboard shortcut should Olamide use to save her Word document regularly?",
    options: [
      "Ctrl + C",
      "Ctrl + X",
      "Ctrl + S",
      "Ctrl + Z",
    ],
    answer: "Ctrl + S",
  },

  {
    id: 13,
    question: "What does editing text mean?",
    options: [
      "Changing existing text",
      "Turning off the computer",
      "Opening a web browser",
      "Creating a new keyboard",
    ],
    answer: "Changing existing text",
  },

  {
    id: 14,
    question: "In Microsoft Word, what can you do by double-clicking a word?",
    options: [
      "Shut down Word",
      "Select the word",
      "Print the entire computer",
      "Open a new computer",
    ],
    answer: "Select the word",
  },

  {
    id: 15,
    question: "Which keyboard shortcut is used to copy selected text?",
    options: [
      "Ctrl + V",
      "Ctrl + X",
      "Ctrl + Z",
      "Ctrl + C",
    ],
    answer: "Ctrl + C",
  },

  {
    id: 16,
    question: "Which keyboard shortcut is used to paste copied text?",
    options: [
      "Ctrl + C",
      "Ctrl + S",
      "Ctrl + V",
      "Ctrl + X",
    ],
    answer: "Ctrl + V",
  },

  {
    id: 17,
    question: "What does formatting text change?",
    options: [
      "How the text looks",
      "The computer's power supply",
      "The internet connection",
      "The computer's storage device",
    ],
    answer: "How the text looks",
  },

  {
    id: 18,
    question: "Which formatting option is commonly used to make an important heading stand out?",
    options: [
      "Delete",
      "Paste",
      "Bold",
      "Cut",
    ],
    answer: "Bold",
  },

  {
    id: 19,
    question: "When should you use a numbered list in Microsoft Word?",
    options: [
      "When storing computer passwords",
      "When showing steps or an ordered sequence",
      "When opening a web browser",
      "When shutting down the computer",
    ],
    answer: "When showing steps or an ordered sequence",
  },

  {
    id: 20,
    question: "What are tables in Microsoft Word useful for?",
    options: [
      "Connecting the computer to Wi-Fi",
      "Deleting all documents",
      "Installing a web browser",
      "Organizing information into rows and columns",
    ],
    answer: "Organizing information into rows and columns",
  },
];