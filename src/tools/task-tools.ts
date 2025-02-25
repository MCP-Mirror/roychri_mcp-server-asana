import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const searchTasksTool: Tool = {
  name: "asana_search_tasks",
  description: "Search tasks in a workspace with advanced filtering options",
  inputSchema: {
    type: "object",
    properties: {
      workspace: {
        type: "string",
        description: "The workspace to search in"
      },
      text: {
        type: "string",
        description: "Text to search for in task names and descriptions"
      },
      resource_subtype: {
        type: "string",
        description: "Filter by task subtype (e.g. milestone)"
      },
      "portfolios.any": {
        type: "string",
        description: "Comma-separated list of portfolio IDs"
      },
      "assignee.any": {
        type: "string",
        description: "Comma-separated list of user IDs"
      },
      "assignee.not": {
        type: "string",
        description: "Comma-separated list of user IDs to exclude"
      },
      "projects.any": {
        type: "string",
        description: "Comma-separated list of project IDs"
      },
      "projects.not": {
        type: "string",
        description: "Comma-separated list of project IDs to exclude"
      },
      "projects.all": {
        type: "string",
        description: "Comma-separated list of project IDs that must all match"
      },
      "sections.any": {
        type: "string",
        description: "Comma-separated list of section IDs"
      },
      "sections.not": {
        type: "string",
        description: "Comma-separated list of section IDs to exclude"
      },
      "sections.all": {
        type: "string",
        description: "Comma-separated list of section IDs that must all match"
      },
      "tags.any": {
        type: "string",
        description: "Comma-separated list of tag IDs"
      },
      "tags.not": {
        type: "string",
        description: "Comma-separated list of tag IDs to exclude"
      },
      "tags.all": {
        type: "string",
        description: "Comma-separated list of tag IDs that must all match"
      },
      "teams.any": {
        type: "string",
        description: "Comma-separated list of team IDs"
      },
      "followers.not": {
        type: "string",
        description: "Comma-separated list of user IDs to exclude"
      },
      "created_by.any": {
        type: "string",
        description: "Comma-separated list of user IDs"
      },
      "created_by.not": {
        type: "string",
        description: "Comma-separated list of user IDs to exclude"
      },
      "assigned_by.any": {
        type: "string",
        description: "Comma-separated list of user IDs"
      },
      "assigned_by.not": {
        type: "string",
        description: "Comma-separated list of user IDs to exclude"
      },
      "liked_by.not": {
        type: "string",
        description: "Comma-separated list of user IDs to exclude"
      },
      "commented_on_by.not": {
        type: "string",
        description: "Comma-separated list of user IDs to exclude"
      },
      "due_on": {
        type: "string",
        description: "ISO 8601 date string or null"
      },
      "due_on.before": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "due_on.after": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "due_at.before": {
        type: "string",
        description: "ISO 8601 datetime string"
      },
      "due_at.after": {
        type: "string",
        description: "ISO 8601 datetime string"
      },
      "start_on": {
        type: "string",
        description: "ISO 8601 date string or null"
      },
      "start_on.before": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "start_on.after": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "created_on": {
        type: "string",
        description: "ISO 8601 date string or null"
      },
      "created_on.before": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "created_on.after": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "created_at.before": {
        type: "string",
        description: "ISO 8601 datetime string"
      },
      "created_at.after": {
        type: "string",
        description: "ISO 8601 datetime string"
      },
      "completed_on": {
        type: "string",
        description: "ISO 8601 date string or null"
      },
      "completed_on.before": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "completed_on.after": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "completed_at.before": {
        type: "string",
        description: "ISO 8601 datetime string"
      },
      "completed_at.after": {
        type: "string",
        description: "ISO 8601 datetime string"
      },
      "modified_on": {
        type: "string",
        description: "ISO 8601 date string or null"
      },
      "modified_on.before": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "modified_on.after": {
        type: "string",
        description: "ISO 8601 date string"
      },
      "modified_at.before": {
        type: "string",
        description: "ISO 8601 datetime string"
      },
      "modified_at.after": {
        type: "string",
        description: "ISO 8601 datetime string"
      },
      completed: {
        type: "boolean",
        description: "Filter for completed tasks"
      },
      is_subtask: {
        type: "boolean",
        description: "Filter for subtasks"
      },
      has_attachment: {
        type: "boolean",
        description: "Filter for tasks with attachments"
      },
      is_blocked: {
        type: "boolean",
        description: "Filter for tasks with incomplete dependencies"
      },
      is_blocking: {
        type: "boolean",
        description: "Filter for incomplete tasks with dependents"
      },
      sort_by: {
        type: "string",
        description: "Sort by: due_date, created_at, completed_at, likes, modified_at",
        default: "modified_at"
      },
      sort_ascending: {
        type: "boolean",
        description: "Sort in ascending order",
        default: false
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    },
    required: ["workspace"]
  }
};

export const getTaskTool: Tool = {
  name: "asana_get_task",
  description: "Get detailed information about a specific task",
  inputSchema: {
    type: "object",
    properties: {
      task_id: {
        type: "string",
        description: "The task ID to retrieve"
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    },
    required: ["task_id"]
  }
};

export const createTaskTool: Tool = {
  name: "asana_create_task",
  description: "Create a new task in a project",
  inputSchema: {
    type: "object",
    properties: {
      project_id: {
        type: "string",
        description: "The project to create the task in"
      },
      name: {
        type: "string",
        description: "Name of the task"
      },
      notes: {
        type: "string",
        description: "Description of the task"
      },
      due_on: {
        type: "string",
        description: "Due date in YYYY-MM-DD format"
      },
      assignee: {
        type: "string",
        description: "Assignee (can be 'me' or a user ID)"
      }
    },
    required: ["project_id", "name"]
  }
};

export const updateTaskTool: Tool = {
  name: "asana_update_task",
  description: "Update an existing task's details",
  inputSchema: {
    type: "object",
    properties: {
      task_id: {
        type: "string",
        description: "The task ID to update"
      },
      name: {
        type: "string",
        description: "New name for the task"
      },
      notes: {
        type: "string",
        description: "New description for the task"
      },
      due_on: {
        type: "string",
        description: "New due date in YYYY-MM-DD format"
      },
      assignee: {
        type: "string",
        description: "New assignee (can be 'me' or a user ID)"
      },
      completed: {
        type: "boolean",
        description: "Mark task as completed or not"
      }
    },
    required: ["task_id"]
  }
};

export const createSubtaskTool: Tool = {
  name: "asana_create_subtask",
  description: "Create a new subtask for an existing task",
  inputSchema: {
    type: "object",
    properties: {
      parent_task_id: {
        type: "string",
        description: "The parent task ID to create the subtask under"
      },
      name: {
        type: "string",
        description: "Name of the subtask"
      },
      notes: {
        type: "string",
        description: "Description of the subtask"
      },
      due_on: {
        type: "string",
        description: "Due date in YYYY-MM-DD format"
      },
      assignee: {
        type: "string",
        description: "Assignee (can be 'me' or a user ID)"
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    },
    required: ["parent_task_id", "name"]
  }
};

export const getMultipleTasksByGidTool: Tool = {
  name: "asana_get_multiple_tasks_by_gid",
  description: "Get detailed information about multiple tasks by their GIDs (maximum 25 tasks)",
  inputSchema: {
    type: "object",
    properties: {
      task_ids: {
        oneOf: [
          {
            type: "array",
            items: {
              type: "string"
            },
            maxItems: 25
          },
          {
            type: "string",
            description: "Comma-separated list of task GIDs (max 25)"
          }
        ],
        description: "Array or comma-separated string of task GIDs to retrieve (max 25)"
      },
      opt_fields: {
        type: "string",
        description: "Comma-separated list of optional fields to include"
      }
    },
    required: ["task_ids"]
  }
};
