import { CalendarEventInternal } from '@schedule-x/shared/src/interfaces/calendar/calendar-event.interface'
import { EventRRuleOptions } from './event-rrule-options'

export interface AugmentedEvent extends CalendarEventInternal {
  rrule?: EventRRuleOptions
  exdate?: string[]
  _isRecurrenceCopy?: boolean

  _durationInMinutes?: number
  _durationInDays?: number
}
