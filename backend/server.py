from flask import Flask,jsonify
import requests
import random
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

# List of categories
categories = [
    'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best',
    'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage',
    'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental', 'equality',
    'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food', 'forgiveness',
    'freedom', 'friendship', 'funny', 'future', 'god', 'good', 'government', 'graduation', 'great',
    'happiness', 'health', 'history', 'home', 'hope', 'humor', 'imagination', 'inspirational',
    'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal', 'life', 'love',
    'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'
]


# get quote by category 
@app.route('/get_quote/<category>', methods=['GET'])
def get_quote(category):
    api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
    
    # Replace 'YOUR_API_KEY' with your actual API key
    headers = {'X-Api-Key': 'rpqa8iZJzJRnHXtWMzOi7A==ybP4319Ug8w5xmuY'}

    response = requests.get(api_url, headers=headers)

    if response.status_code == requests.codes.ok:
        # Return the API response as JSON
        return jsonify({'quote': response.json()})
    else:
        # Return an error message along with the status code
        return jsonify({'error': 'Failed to retrieve a quote', 'status_code': response.status_code}), response.status_code


#get quote of the day // random one
@app.route('/get_quote_of_theday', methods=['GET'])
def get_random_quote():
    # Select a random category from the list
    random_category = random.choice(categories)
    print(random_category)
    api_url = f'https://api.api-ninjas.com/v1/quotes?category={random_category}'
    
    # Replace 'YOUR_API_KEY' with your actual API key
    headers = {'X-Api-Key': 'rpqa8iZJzJRnHXtWMzOi7A==ybP4319Ug8w5xmuY'}

    response = requests.get(api_url, headers=headers)

    if response.status_code == requests.codes.ok:
        # Return the API response as JSON
        return jsonify({'quote': response.json(), 'category': random_category})
    else:
        # Return an error message along with the status code
        return jsonify({'error': 'Failed to retrieve a quote', 'status_code': response.status_code}), response.status_code

# get quote by mood 
mood_categories=['alone','anger','birthday','change','cool','courage','dating','death','dreams','failure','fear','forgiveness','freedom'
                ,'funny','graduation','great','happiness' ,'humor','imagination','inspirational','hope', 'love','life','marriage','men','money','mom']















if __name__=='__main__':
    app.run(debug=True)