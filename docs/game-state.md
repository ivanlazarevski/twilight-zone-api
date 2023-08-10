# GAME STATE

## Player State

- Tokens (In pool, in reserve)
- Units (In play, in reserve)
- Speaker
- Strategy Cards (Will determine turn order as well)
- Faction
- Home System (Controlled, Uncontrolled)
- Mecatol Rex Control
- Planets (Resources, Influence)
- Commodities
- Trade Goods
- Action Cards
- Secret Objectives
- Technologies

## Map State

- Data for each system tile
- Planets
- Planet Owner
- Armies present
- Activated (by)
- Hex coordinates

## Game Details State

- Action Cards Deck
- Agenda Deck
- Public Objectives (Deck, Unrevealed Objectives, Revealed Objectives, Public Objective Scores)
- Secret Objectives (Deck, Secret Objective Scores)
- Player Score (Secret Objectives + Public Objectives VP + Mecatol Rex VP + Agenda VP + Imperial Card VP)

# Initial Game State Setup

- Player Number and Player States
- Map Type (Defined by player number)
- Player Scores (Initially 0 for all players)
- Objectives (Picked 10, Revealed first two)
- Secret Objectives (For all players)
- Establish Speaker (RNG)

# Initial Unit State Setup

Player place their units on the planets in their Home Systems

# Strategy Phase

Players Select Strategy Cards, clockwise starting from the speaker to the last player, and then counter-clockwise from the last player towards the speaker.

# Action Phase

Players take turns in an order defined by the Strategy Cards (If players have 2 Strategic Cards the Card with the lesser number applies to the Turn Order)
Active Player chooses an Action Type (Tactical, Strategic, Component)

- If **Component Action** is in play: Resolve the Action

- If **Tactical Action** is in play:

  1. Player chooses a System to Activate
     . Player chooses If he wants Movement or Production
  2. If **Movement** is chosen, Player chooses Units to Move towards the Activated System (Movement is resolved individually for each Unit. Check Units Move Stat, Check Units Capacity, Check Fleet Size, Check If Enemy Units are Present (If Yes, **Combat Phase** will be initiated, unless otherwise specified), Check If Anomalies are present along the way), and resolves the movement based on the conditions along the way (All Units that are being moved must be able to get to the Activated System).
  3. If **Production** is chosen, Player initiates production Sub-Phase.
     - Production Sub-Phase: Player chooses which Units they want to produce, Player must have enough Resources to pay for the Cost (Planet Resources and Trade Goods may be used) of all Units in Production, Player can Produce a number of Units equal to the Production Value of the Space Dock + The Resource Value of the Planet where the Space Dock is located, or The Production Value of another Unit (If Applicable), and Player has to take into account Fleet Size and/or Unit Capacity(For Fighters) If producing Space Ships.

- If **Strategic Action** is in play:
  1. Resolve the **Primary Ability**.
  2. Starting from the Speaker, ask the other Players If they want to resolve the **Secondary Ability** of the Strategic Card in play.
     - Resolving a **Secondary Ability** may Cost additional Tokens and/or Resources.

# Status Phase

When all players pass on their Turn, the **Status Phase** begins.
The **Status Phase** is as follows:

1. Score Objectives (1 Public Objective, 1 Secret Objective) following Initiative Order(Determined by the Strategy Cards Numbers).
2. Reveal Public Objective
3. Draw Action Cards
4. Remove Command Tokens in Play.
5. Gain and Redistribute Command Tokens.
6. Ready Cards (Planets, Technologies...)
7. Repair Units
8. Return Strategy Cards

# Agenda Phase

If Mecatol Rex is Controlled by a Player, the **Agenda Phase** comes into Play.
The **Agenda Phase** is as follows:

1. Players may play **Action Cards** that can be played before an **Agenda Card** is Revealed
2. **Agenda Card** is Revealed
3. Players may play **Action Cards** that can be played after an **Agenda Card** is Revealed
4. **Agenda Card** is Voted On
5. Resolve **Agenda Card**
   - Resolve Predictions
   - Resolve Agenda Effect
6. Repeat Steps **1-5**
