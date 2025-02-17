devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      console.log("Server is running...");
      return middlewares;
    }
  }
  