const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "build"), // Folder name
        filename: "bundle.js",
    },
    mode: "production",
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(gif|png|jpe?g)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/'
                    }
                }]
            },

            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
        ],
    },
};