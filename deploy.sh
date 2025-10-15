#!/bin/bash

# Deployment script for Hor Chanpheng Portfolio
echo "🚀 Deploying Hor Chanpheng Portfolio to Firebase..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please login to Firebase first:"
    firebase login
fi

# Deploy to Firebase
echo "📦 Deploying to Firebase Hosting..."
firebase deploy --only hosting

echo "✅ Deployment complete!"
echo "🌐 Your portfolio is now live at: https://$(firebase use --project | grep -o '[^/]*$').web.app"
