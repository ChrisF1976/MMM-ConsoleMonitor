# MMM-ConsoleMonitor

A MagicMirror² module that monitors and displays JavaScript console errors and warnings directly on your mirror.

## Features
- **Real-time monitoring**: Captures console errors and warnings instantly
- **Visual distinction**: Errors shown in red, warnings in yellow
- **Limited display**: Shows only the most recent entries (configurable)
- **Non-intrusive**: Doesn't interfere with normal console output
- **Easy setup**: No additional dependencies required

## Installation

1. Navigate to your MagicMirror `modules` directory:
```bash
cd ~/MagicMirror/modules
git clone https://github.com/ChrisF1976/MMM-ConsoleMonitor.git
```

2. Add the module to your config/config.js file:
```bash
{
    module: "MMM-ConsoleMonitor",
    position: "top_right", // Any position works
    config: {
        maxEntries: 10, // Optional configuration
    }
},
```

### Configuration Options
| Option | Default | Description |
|--------|---------|-------------|
| `maxEntries` | 10 | Maximum number of entries to display |

## Usage

Once installed and configured, the module will automatically start monitoring your console. Any console.error() or console.warn() calls will be displayed in the module window.

### Display Format

 - ERRORS: Red text ([ERROR] message)
 - WARNINGS: Yellow text ([WARN] message)

How It Works

The module overrides the original console.error() and console.warn() methods
When called, messages are captured and sent to the frontend via WebSockets
The frontend displays them in real-time
Original console functions continue to work normally
Development Notes

## Development tool: Recommended for debugging purposes only

## License

MIT License - See LICENSE file for details.

## Credits

Developed for the MagicMirror² community.
