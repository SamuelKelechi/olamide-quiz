export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "Olamide, what is a computer?",
    options: [
      "An electronic device that receives, processes, stores, and produces information",
      "A machine used only for typing",
      "A device used only for playing music",
      "A machine used only for printing documents",
    ],
    answer:
      "An electronic device that receives, processes, stores, and produces information",
  },

  {
    id: 2,
    question: "Which part of the computer displays information and images?",
    options: [
      "Keyboard",
      "Monitor",
      "Mouse",
      "Printer",
    ],
    answer: "Monitor",
  },

  {
    id: 3,
    question: "What is the main purpose of a keyboard?",
    options: [
      "To display pictures",
      "To produce sound",
      "To type and enter commands",
      "To print documents",
    ],
    answer: "To type and enter commands",
  },

  {
    id: 4,
    question: "Which device is mainly used to point, select, open, and move items on the screen?",
    options: [
      "Mouse",
      "Monitor",
      "Printer",
      "Speaker",
    ],
    answer: "Mouse",
  },

  {
    id: 5,
    question: "What is the main purpose of speakers or headphones?",
    options: [
      "To store files",
      "To produce sound",
      "To type documents",
      "To display images",
    ],
    answer: "To produce sound",
  },

  {
    id: 6,
    question: "Which device produces a paper copy of a document?",
    options: [
      "Monitor",
      "Keyboard",
      "Printer",
      "Mouse",
    ],
    answer: "Printer",
  },

  {
    id: 7,
    question: "What is a USB drive mainly used for?",
    options: [
      "Displaying pictures",
      "Producing sound",
      "Portable storage and moving files",
      "Typing documents",
    ],
    answer: "Portable storage and moving files",
  },

  {
    id: 8,
    question: "Which of the following is an input device?",
    options: [
      "Monitor",
      "Printer",
      "Keyboard",
      "Speaker",
    ],
    answer: "Keyboard",
  },

  {
    id: 9,
    question: "Which of these is an output device?",
    options: [
      "Keyboard",
      "Mouse",
      "Monitor",
      "USB drive",
    ],
    answer: "Monitor",
  },

  {
    id: 10,
    question: "Olamide wants to start a computer. What should she do first?",
    options: [
      "Delete all files",
      "Make sure the power source is connected",
      "Remove the keyboard",
      "Open Microsoft Word",
    ],
    answer: "Make sure the power source is connected",
  },

  {
    id: 11,
    question: "What should Olamide do after pressing the computer's power button?",
    options: [
      "Immediately unplug the computer",
      "Wait for the computer to load",
      "Remove the mouse",
      "Delete the desktop",
    ],
    answer: "Wait for the computer to load",
  },

  {
    id: 12,
    question: "What should you normally use to turn off a computer properly?",
    options: [
      "Start/Power → Shut down",
      "Remove the keyboard",
      "Switch off the monitor only",
      "Pull out the power cable immediately",
    ],
    answer: "Start/Power → Shut down",
  },

  {
    id: 13,
    question: "What does a single-click normally do?",
    options: [
      "Select an item or place the cursor",
      "Shut down the computer",
      "Print a document",
      "Delete a folder",
    ],
    answer: "Select an item or place the cursor",
  },

  {
    id: 14,
    question: "What does a double-click usually do?",
    options: [
      "Opens a file, folder, or program",
      "Turns off the monitor",
      "Deletes the computer",
      "Changes the keyboard",
    ],
    answer: "Opens a file, folder, or program",
  },

  {
    id: 15,
    question: "What does a right-click usually open?",
    options: [
      "A shortcut or context menu",
      "The computer power supply",
      "The printer",
      "A new keyboard",
    ],
    answer: "A shortcut or context menu",
  },

  {
    id: 16,
    question: "What does drag and drop mean when using a mouse?",
    options: [
      "Clicking and immediately releasing without moving",
      "Holding the mouse button, moving an item, and releasing it",
      "Pressing the keyboard only",
      "Turning the computer off",
    ],
    answer: "Holding the mouse button, moving an item, and releasing it",
  },

  {
    id: 17,
    question: "Which keyboard key is mainly used to create a space between words?",
    options: [
      "Enter",
      "Shift",
      "Spacebar",
      "Backspace",
    ],
    answer: "Spacebar",
  },

  {
    id: 18,
    question: "Which key removes characters to the left of the cursor?",
    options: [
      "Enter",
      "Backspace",
      "Tab",
      "Caps Lock",
    ],
    answer: "Backspace",
  },

  {
    id: 19,
    question: "What is the desktop?",
    options: [
      "The main screen after signing in",
      "A type of keyboard",
      "A computer printer",
      "A storage device",
    ],
    answer: "The main screen after signing in",
  },

  {
    id: 20,
    question: "Olamide wants to keep her computer work organized. What should she use to organize her files?",
    options: [
      "Folders",
      "Speakers",
      "Monitor",
      "Mouse buttons",
    ],
    answer: "Folders",
  },
];