module.exports = {
    module: {
        rules: [
            {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             use: 'bable-loader',
            },
        ],
    },
   
   };