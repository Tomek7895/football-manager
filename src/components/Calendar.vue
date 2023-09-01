
<template>
    <v-row>
      <v-col cols="10">
        <v-card class="mx-4 my-4">
          <!--- CALENDAR COMPONENT WITH OPTIONS SETUP  --->
          <!--- TODO: setup starter options for calendar like step, start, end etc.  --->
          <vue-cal selected-date="2018-11-19"
            :time-from="5 * 60"
            :time-to="23 * 60"
            :disable-views="['years', 'year']"
            active-view="week"
            today-button
            events-on-month-view="short"
            :events="events"
            :on-event-click="onEventClick"
            locale="pl">
            <!--- TODAY BUTTON TEMPLATE  --->
            <!--- TODO: fixed today icon  --->
            <template #today-button>
              <v-tooltip>
                <template #activator="{ on }">
                  <v-btn v-on="on">
                    <v-icon>my_location</v-icon>
                  </v-btn>
                  <span>Go to Today's date</span>
                </template>
              </v-tooltip>
            </template>
          </vue-cal>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card class="mx-4 my-4">
          <!--- CALENDAR ACTIONS  --->
          <v-card-title class="text-center">Dodaj wydarzenie</v-card-title>
          <v-list>
            <!--- TODO: add actions for buttons after backend setup  --->
            <v-list-item class="mb-2"><v-btn color="primary">Dodaj mecz</v-btn></v-list-item>
            <v-list-item class="mb-2"><v-btn color="green">Dodaj trening</v-btn></v-list-item>
            <v-list-item class="mb-2"><v-btn color="red">Dodaj spotkanie</v-btn></v-list-item>
            <v-list-item class="mb-2"><v-btn color="yellow">Dodaj inne</v-btn></v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <!--- CALENDAR EVENT ACTIONS ON CLICK  --->
    <!--- TODO: style dialog for events  --->
    <v-dialog v-model="showDialog">
      <v-card>
        <v-card-title>
          <v-icon>{{ selectedEvent.icon }}</v-icon>
          <span>{{ selectedEvent.title }}</span>
          <v-spacer />
          <strong>{{ selectedEvent.start && selectedEvent.start.format('DD/MM/YYYY') }}</strong>
        </v-card-title>
        <v-card-text>
          <strong>Event details:</strong>
          <ul>
            <li>Event starts at: {{ selectedEvent.start && selectedEvent.start.formatTime() }}</li>
            <li>Event ends at: {{ selectedEvent.end && selectedEvent.end.formatTime() }}</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import VueCal from 'vue-cal'
  import 'vue-cal/dist/vuecal.css'
  export default {
    components: {
      VueCal
    },
    data: () => ({
      showDialog: false,
      // TODO: events from database
      events: [
        {
          start: '2018-11-20 14:00',
          end: '2018-11-20 18:00',
          title: 'Need to go shopping',
          icon: 'shopping_cart',
          content: 'content my shopping list',
          class: 'leisure',
          deletable: false,
          resizable: false,
          draggable: false
        },
        {
          start: '2018-11-22 10:00',
          end: '2018-11-22 15:00',
          title: 'Golf with John',
          icon: 'golf_course',
          content: 'Do I need to tell how many holes?',
          class: 'sport',
          deletable: false,
          resizable: false,
          draggable: false
        }
      ]
    }),
    methods: {
      onEventClick(event, e) {
        this.selectedEvent = event
        this.showDialog = true
        e.stopPropagation()
      }
    }
  }
  </script>
  
  <style>
  /* CALENDAR SETUP STYLES */
  .vuecal__event {
    cursor: pointer;
  }
  
  .vuecal__event-title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 4px 0 8px;
  }
  
  .vuecal__event-time {
    display: inline-block;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  
  .vuecal__event-content {
    font-style: italic;
  }
  
  .vuecal__menu,
  .vuecal__cell-events-count {
    background-color: #66BB6A;
  }
  
  .vuecal__title-bar {
    background-color: #e4f5ef;
  }
  
  .vuecal__cell--today,
  .vuecal__cell--current {
    background-color: rgba(240, 240, 255, 0.4);
  }
  
  .vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
    background-color: rgba(235, 255, 245, 0.4);
  }
  
  .vuecal__cell--selected:before {
    border-color: rgba(66, 185, 131, 0.5);
  }
  
  .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
  .vuecal__cell-split--highlighted {
    background-color: rgba(195, 255, 225, 0.5);
  }
  
  .vuecal__arrow.vuecal__arrow--highlighted,
  .vuecal__view-btn.vuecal__view-btn--highlighted {
    background-color: rgba(136, 236, 191, 0.25);
  }
  
  /* EVENTS COLORS CLASS */
  /* TODO: set colors from vuetify for all events */
  .vuecal__event.leisure {
    background-color: rgba(253, 156, 66, 0.9);
    border: 1px solid rgb(233, 136, 46);
    color: #fff;
  }
  
  .vuecal__event.sport {
    background-color: rgba(255, 102, 102, 0.9);
    border: 1px solid rgb(235, 82, 82);
    color: #fff;
  }
  </style>
  