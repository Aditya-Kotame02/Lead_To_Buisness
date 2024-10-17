from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/leads', methods=['GET'])
def get_leads():
    # Placeholder data - replace with database query later
    leads = [
        {"id": 1, "name": "John Doe", "email": "john@example.com", "score": 85, "status": "hot"},
        {"id": 2, "name": "Jane Smith", "email": "jane@example.com", "score": 72, "status": "warm"},
        {"id": 3, "name": "Bob Johnson", "email": "bob@example.com", "score": 45, "status": "cold"},
    ]
    return jsonify(leads)

@app.route('/api/generate-plan', methods=['POST'])
def generate_plan():
    data = request.json
    # Placeholder - replace with actual AI/ML model later
    plan = f"""
    Business Plan for {data['businessType']} in the {data['industry']} industry

    1. Executive Summary
    - Target Audience: {data['targetAudience']}
    - Key Strategies: {data['keyStrategies']}

    2. Market Analysis
    - Industry trends and growth potential
    - Competitor analysis

    3. Marketing and Sales Strategy
    - Targeted marketing campaigns
    - Sales funnel optimization

    4. Financial Projections
    - Revenue forecast
    - Break-even analysis

    5. Implementation Timeline
    - Short-term goals (0-6 months)
    - Long-term goals (6-18 months)

    6. Risk Assessment and Mitigation Strategies

    7. Conclusion and Next Steps
    """
    return jsonify({"plan": plan})

@app.route('/api/performance', methods=['GET'])
def get_performance():
    # Placeholder data - replace with actual data later
    performance = {
        "metrics": [
            {"id": 1, "name": "Conversion Rate", "value": "23.5%", "change": "+2.1%"},
            {"id": 2, "name": "Total Leads", "value": "1,234", "change": "+5.3%"},
            {"id": 3, "name": "Revenue", "value": "$45,678", "change": "+8.7%"},
            {"id": 4, "name": "ROI", "value": "187%", "change": "+12.4%"},
        ],
        "chartData": [
            {"month": "Jan", "leads": 800, "conversions": 180},
            {"month": "Feb", "leads": 900, "conversions": 220},
            {"month": "Mar", "leads": 1000, "conversions": 240},
            {"month": "Apr", "leads": 1100, "conversions": 260},
            {"month": "May", "leads": 1200, "conversions": 290},
            {"month": "Jun", "leads": 1300, "conversions": 310},
        ]
    }
    return jsonify(performance)

if __name__ == '__main__':
    app.run(debug=True)