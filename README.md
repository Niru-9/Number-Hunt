# 🎯 Number Hunt

A fun and interactive number guessing game built with vanilla HTML, CSS, and JavaScript. Test your luck and intuition by guessing the secret number!

## 🎮 Game Features

- **Random Number Generation**: Each game generates a new random number between 1-10
- **Smart Feedback System**: Get helpful hints with "too high" or "too low" messages
- **Attempt Tracking**: You have 12 attempts to guess the correct number
- **Input Validation**: Ensures only valid numbers (1-10) are accepted
- **Visual Feedback**: Color-coded messages for different game states
- **Responsive Design**: Works seamlessly across different screen sizes

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/number-hunt.git
   cd number-hunt
   ```

2. **Run the game**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required!

3. **Start playing**
   - Enter a number between 1 and 10
   - Click "Guess" and see if you can find the secret number
   - Use the feedback to guide your next guess

## 📁 Project Structure

```
number-hunt/
├── index.html      # Main HTML structure
├── style.css       # Game styling and layout
├── guess.js        # Core game logic
└── README.md       # This file
```

## 🎯 How to Play

1. The game generates a random number between 1 and 10
2. Enter your guess in the input field
3. Click the "Guess" button to submit
4. Receive feedback:
   - 🟢 **Green**: Correct guess - You win!
   - 🔴 **Red**: Wrong guess with hint (too high/low)
   - 🟠 **Orange**: Invalid input warning
   - ⚫ **Gray**: Game over (12 attempts used)

## 🛠️ Technical Details

- **Language**: Vanilla JavaScript (ES6+)
- **Styling**: Pure CSS3
- **Browser Support**: All modern browsers
- **Dependencies**: None

### Key Game Logic
- Maximum attempts: 12
- Number range: 1-10 (inclusive)
- Real-time input validation
- Dynamic UI state management

## 🔧 Customization

Want to modify the game? Here are some easy tweaks:

- **Change difficulty**: Modify the number range in `guess.js` (line 1)
- **Adjust attempts**: Update `maxAttempts` variable (line 3)
- **Styling**: Customize colors and layout in `style.css`

## 🤝 Contributing

Contributions are welcome! Here are some ideas for improvements:

- Add difficulty levels (easy/medium/hard)
- Implement a scoring system
- Add sound effects
- Create a leaderboard
- Add animation effects
- Mobile app version

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute as you see fit.

## 🌟 Show Your Support

If you enjoyed this game or found it useful:
- ⭐ Star this repository
- 🍴 Fork it for your own modifications
- 🐛 Report any bugs you find
- 💡 Suggest new features

---

**Happy Number Hunting!** 🎯
