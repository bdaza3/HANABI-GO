import React, { useState, useEffect, Component } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Calendar, MapPin, Users, Clock, ChevronDown } from 'lucide-react';
import './App.css';

class AI extends Component {
    constructor(props) {//constructor is a special method for creating and initializing an object created within a class
      super(props);
      this.state = {
        response: "", // Add a state property to store the API response
      };
      this.ai = new GoogleGenAI({ apiKey: "AIzaSyDJjiVbjWPYjFafKUSIvSE8CTz3v7mlcTo" }); // Use `this` to define the property
    }

    async main() {//async function is a function that returns a promise
        try {
            const response = await this.ai.models.generateContent({
              model: "gemini-2.0-flash",
              contents: "Explain what Hanabi is in Japanese, and a short description of the festivals.",
              //contents is the text to send to the AI model, and this should be sent as a string from the user
            });
            console.log(response.text); // Log the response to the console
            this.setState({ response: response.text }); // Update the state with the response
          } catch (error) {
            console.error("Error fetching AI response:", error); // Log any errors
            this.setState({ response: "Error fetching response" }); // Show an error message in the UI
          }
    }


    render() {
      return (
        <div className="filter-list">
          <h1>AI Gemini Bot</h1>
            <button onClick={() => this.main()}>Generate</button>
            <div id = "AIResponse" className = "AIResponse">
              <div className="AIResponseText">
                {this.state.response}
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default AI;
