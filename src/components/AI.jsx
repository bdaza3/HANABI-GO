import React, { useState, useEffect, Component } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Calendar, MapPin, Users, Clock, ChevronDown } from 'lucide-react';

class AI extends Component {
    constructor(props) {//constructor is a special method for creating and initializing an object created within a class
      super(props);
      this.state = {
        response: "", // Add a state property to store the API response
        userInput: ""
      };
      this.ai = new GoogleGenAI({ apiKey: "AIzaSyDJjiVbjWPYjFafKUSIvSE8CTz3v7mlcTo" }); // Use `this` to define the property
    }


    async main() {//async function is a function that returns a promise
        const aiContext = "You are a festival assistant with information on Japanese fireworks festivals. You can provide information about the festival, including its name, date, time, location, expected crowd, and description. Please answer the user's questions based on this context. Respond as you would as a festival assistant, and reply in a view sentences with minimal * characters and parenthesis."; 
        try {
            const response = await this.ai.models.generateContent({
              model: "gemini-2.0-flash",
              //include context and user input in contents
              contents: [aiContext, this.state.userInput], // The context is the AI model's instructions
              //contents is the text to send to the AI model, and this should be sent as a string from the user
            });
            this.setState({ response: response.text }); // Update the state with the response
          } catch (error) {
            console.error("Error fetching AI response:", error); // Log any errors
            this.setState({ response: "Error fetching response" }); // Show an error message in the UI
          }
    }


    render() {
      const styles ={
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)'
        },
        input: {
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '10px',
        },
        button: {
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
        },
        responseContainer: {
          marginTop: '20px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        },
      }
      return (
      <div style = {styles.container}>
        <div>
          <h1 styles="text-2xl font-bold mb-4">Festival AI Assistant</h1>
          <input
            type="text"
            value={this.state.userInput}
            onChange={(e) => this.setState({ userInput: e.target.value })}
            placeholder="Ask me anything about the festival!"
          />
          <button
            onClick={() => this.main()}
          >
            Ask AI
          </button>
          {this.state.response && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h2 className="font-bold">AI Response:</h2>
              <p>{this.state.response}</p>
            </div>
          )}
        </div>
      </div>
      );
    }


  }
  
  export default AI;
