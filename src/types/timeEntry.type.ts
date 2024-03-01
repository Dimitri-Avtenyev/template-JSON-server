export interface TimeEntry {
  id: number;
  spent_date: string;
  hours: number;
  hours_without_timer: number;
  rounded_hours: number;
  notes: string;
  is_locked: boolean;
  locked_reason: string;
  is_closed: boolean;
  is_billed: boolean;
  timer_started_at: string;
  started_time: string;
  ended_time: string;
  is_running: boolean;
  billable: boolean;
  budgeted: boolean;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
  };
  client: {
    id: number;
    name: string;
    currency: string;
  };
  project: {
    id: number;
    name: string;
    code: string;
  };
  task: {
    id: number;
    name: string;
  };
  user_assignment: {
    id: number;
    is_project_manager: boolean;
    is_active: boolean;
    use_default_rates: boolean;
    created_at: string;
    updated_at: string;
  };
  task_assignment: {
    id: number;
    billable: boolean;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  };
  invoice: string;
  external_reference: string;
}
